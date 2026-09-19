import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma";
export declare const prisma: PrismaClient<{
    adapter: PrismaPg;
}, never, import("../../generated/prisma/runtime/client").DefaultArgs>;
