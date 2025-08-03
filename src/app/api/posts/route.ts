import { prisma } from "@/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const userProfileId = searchParams.get("user");
  const page = parseInt(searchParams.get("cursor") || "1", 10);
  const LIMIT = 3;

  const { userId } = await auth();
  console.log(userId);

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  let whereCondition;

  if (userProfileId && userProfileId !== "undefined") {
    // Profile page — show only that user's posts
    whereCondition = {
      parentPostId: null,
      userId: userProfileId,
    };
  } else {
    // Feed — show posts from self and followed users
    const following = await prisma.follow.findMany({
      where: { followerId: userId },
      select: { followingId: true },
    });

    const followingIds = following.map((f) => f.followingId);

    whereCondition = {
      parentPostId: null,
      userId: {
        in: [userId, ...followingIds],
      },
    };
  }

  const posts = await prisma.post.findMany({
    where: whereCondition,
    include: {
      user: {
        select: {
          displayName: true,
          username: true,
          img: true,
        },
      },
      rePost: {
        include: {
          user: {
            select: {
              displayName: true,
              username: true,
              img: true,
            },
          },
          _count: {
            select: {
              likes: true,
              rePosts: true,
              comments: true,
            },
          },
          likes: {
            where: { userId },
            select: { id: true },
          },
          rePosts: {
            where: { userId },
            select: { id: true },
          },
          saves: {
            where: { userId },
            select: { id: true },
          },
        },
      },
      _count: {
        select: {
          likes: true,
          rePosts: true,
          comments: true,
        },
      },
      likes: {
        where: { userId },
        select: { id: true },
      },
      rePosts: {
        where: { userId },
        select: { id: true },
      },
      saves: {
        where: { userId },
        select: { id: true },
      },
    },
    take: LIMIT,
    skip: (page - 1) * LIMIT,
    orderBy: {
      createdAt: "desc", // optional: sort newest first
    },
  });

  const totalPosts = await prisma.post.count({
    where: whereCondition,
  });

  const hasMore = page * LIMIT < totalPosts;

  // Simulate loading delay (optional)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Response.json({ posts, hasMore });
}
