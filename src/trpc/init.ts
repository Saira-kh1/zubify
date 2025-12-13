import { initTRPC, TRPCError} from '@trpc/server'
import { getPayload } from 'payload';
import config from "@payload-config";

import superjson from "superjson";

import { headers as getHeaders } from 'next/headers';

import { cache } from 'react'


export const createTRPCContext = cache(async () => {
  



    return { userId  : 'user_123'};
});

const t = initTRPC.create({
 
    transformer: superjson,

});


export const createTRPCRouter = t.router;
export const createCallFactory = t.createCallerFactory;
export const baseProcedure = t.procedure.use(async ({ next }) =>{
    const payload = await getPayload({ config });


    return next({ ctx: {db: payload } });
});

export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
   const headers = await getHeaders();
   const session = await ctx.db.auth({ headers });


   if(!session.user) {
    throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You must be logged in to access this resource.",
    });
   }
    return next({
        ctx: {
            ...ctx,
            session:{
                ...session,
                user: session.user,
            },
        },
    });
});