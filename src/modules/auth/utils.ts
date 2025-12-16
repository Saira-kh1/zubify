
import { cookies as getCookies} from "next/headers"

interface Props {
 prefix:string,
 value: string,
}



export const  generateAuthCookies = async ({
    prefix,
    value,
} : Props) =>{
     const cookies  = await getCookies();


        cookies.set({
            name: `${prefix}-token`, // "payload-token" by defualt
            value: value,
            httpOnly:true,
            path: "/",
        // todo: ensure cross-domain cookie sharing
        sameSite: "none",
        domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
        secure: process.env.NODE_ENV === "production",

        });
}