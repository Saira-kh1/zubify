
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
        // sameSite: "none",
        // domain:""

        });
}