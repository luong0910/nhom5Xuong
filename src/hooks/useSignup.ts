import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne } from "../provider/dataProvider";
import { signup } from "../provider/authProvider";


type useSignupParams = {
    resource: string,
}

export const useSignup = ({ resource }: useSignupParams) => {
    return useMutation({
        mutationFn: (variables: any) => {
            return signup({ resource, variables })
        },
    })
}
