import { v } from "convex/values";
import { internalMutation, internalQuery } from "../_generated/server";

export const get = internalQuery({
    args: { secretName: v.string() },
    handler: async (ctx, args) => {
        const secret = await ctx.db
            .query("pluginSecrets")
            .withIndex("by_secret_name", (q) => q.eq("secretName", args.secretName))
            .first();
        return secret?.secretValue ?? null;
    },
});

export const upsert = internalMutation({
    args: { secretName: v.string(), secretValue: v.any() },
    handler: async (ctx, args) => {
        const existing = await ctx.db
            .query("pluginSecrets")
            .withIndex("by_secret_name", (q) => q.eq("secretName", args.secretName))
            .first();
        if (existing) {
            await ctx.db.patch(existing._id, { secretValue: args.secretValue });
        } else {
            await ctx.db.insert("pluginSecrets", {
                secretName: args.secretName,
                secretValue: args.secretValue,
            });
        }
    },
});
