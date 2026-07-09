

export const Image = ({src, alt, className, onClick}: {src: string, alt: string, className?: string, onClick?: () => void}) => {
    return (
        <img src={src} alt={alt} onClick={onClick} className={className} />
    )
}