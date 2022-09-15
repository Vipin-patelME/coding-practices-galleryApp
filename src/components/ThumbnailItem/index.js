// Write your code here.

const Thumbnail = props => {
  const {eachImageItem, displayBigImage} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = eachImageItem

  const onZoome = () => {
    displayBigImage(imageUrl, imageAltText)
  }

  return (
    <li className="thumbnai-image" onClick={onZoome}>
      <img src={thumbnailUrl} alt={thumbnailAltText} />
    </li>
  )
}

export default Thumbnail
