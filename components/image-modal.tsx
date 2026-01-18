"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { getImagePath } from "@/lib/utils"

interface ImageModalProps {
    src: string | null
    alt?: string
    isOpen: boolean
    onClose: () => void
}

export function ImageModal({ src, alt = "Image", isOpen, onClose }: ImageModalProps) {
    if (!src) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden border-none bg-transparent shadow-none">
                <DialogTitle className="sr-only">{alt}</DialogTitle>
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src={getImagePath(src)}
                        alt={alt}
                        className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}
