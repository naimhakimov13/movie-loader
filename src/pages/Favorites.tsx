import { useAppSelector } from '../hooks/redux'

export function Favorites() {
  const { favorites } = useAppSelector(state => state.film)
  return (
    <ul>
      {favorites.map(title => (<li key={title}>{title}</li>))}
    </ul>
  )
}
