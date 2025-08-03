import { prisma } from "@/prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`✅ Webhook ID: ${id}, Event type: ${eventType}`);
    console.log("🔎 Webhook payload:", evt.data);

    if (eventType === "user.created") {
      try {
        await prisma.user.create({
          data: {
            id: evt.data.id,
            username: evt.data.username || "error",
            email: evt.data.email_addresses[0].email_address,
          },
        });
        // location.reload();
        return new Response("user created", { status: 200 });
      } catch (someError: any) {
        console.error(" Error creating user:", someError?.message || someError);
        console.error(someError?.stack);
        return new Response("Error creating user", { status: 500 });
      }
    }

    if (eventType === "user.deleted") {
      try {
        await prisma.user.delete({ where: { id: evt.data.id } });
        return new Response("user deleted", { status: 200 });
      } catch (err) {
        return new Response("error: failed to delet a user", {
          status: 500,
        });
      }
    }

    return new Response("✅ Webhook received", { status: 200 });
  } catch (err) {
    console.error(" Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
