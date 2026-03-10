import { v } from "convex/values";
import { internal } from "../_generated/api";
import { action } from "../_generated/server";

export const getVapiSecrets = action({
  args: {
    organizationId: v.string()
  },
  handler: async (ctx, args) => {
    const plugin = await ctx.runQuery(
      internal.system.plugins.getByOrganizationIdAndService,
      {
        organizationId: args.organizationId,
        service: "vapi",
      },
    );

    if (!plugin) {
      return null;
    }

    const secretName = plugin.secretName;

    const secretData = await ctx.runQuery(
      internal.system.pluginSecrets.get,
      { secretName }
    ) as { privateApiKey: string; publicApiKey: string } | null;

    if (!secretData) {
      return null;
    }

    if (!secretData.publicApiKey) {
      return null;
    }

    if (!secretData.privateApiKey) {
      return null;
    }

    return {
      publicApiKey: secretData.publicApiKey,
    };
  },
});
