export default function ImgsComponents({src, alt, className}) {
  return (
    <>
      <img className={className} src={src} alt={alt} />
    </>  
  )
}