import {
    // Family,
    // FamilyCommonResponse,
    FamilyResponse,
    FamilyRequest,
    // AddFamilyMemberRequest
} from "@/services/family_pb";

import { MethodKind } from "@bufbuild/protobuf";

export const FamilyService = {
    typeName: "shw.FamilyService",
    methods: {
        getFamily: {
            name: "GetFamily",
            I: FamilyRequest,
            O: FamilyResponse,
            kind: MethodKind.unary,
        }
    }
} as const;