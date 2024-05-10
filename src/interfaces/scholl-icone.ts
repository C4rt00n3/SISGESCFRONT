import { LegacyRef } from "react";

export interface iSchollIcone {
    src: string,
    alt: string,
    ref: LegacyRef<HTMLImageElement | null> | undefined,
    text: string
}