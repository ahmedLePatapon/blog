import Image from 'next/image'

export default function ImageCard({ src, alt }: { src: string; alt?: string }) {
    console.log('**********************');
    console.log('src', src);
    console.log('**********************');
    return (
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <Image src={src} alt={alt || 'image'} width={1200} height={675} className="object-cover w-full h-full" />
        </div>
    )
}