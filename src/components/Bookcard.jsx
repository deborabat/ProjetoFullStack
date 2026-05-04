import { Card, Badge } from 'react-bootstrap'

export default function BookCard({ book }) {
  const cover = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://placehold.co/120x180?text=Sem+Capa'

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={cover}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="fs-6">{book.title}</Card.Title>
        <Card.Text className="text-muted small">
          {book.author_name?.join(', ') ?? 'Autor desconhecido'}
        </Card.Text>
        {book.first_publish_year && (
          <Badge bg="secondary">{book.first_publish_year}</Badge>
        )}
      </Card.Body>
    </Card>
  )
}