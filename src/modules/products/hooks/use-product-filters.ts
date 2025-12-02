import { parseAsString, useQueryStates } from "nuqs";


export const useProductFiters = () =>{
    return useQueryStates({
        minPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        }),
         maxPrice: parseAsString
        .withOptions({
            clearOnDefault: true,
        }),
    })
}