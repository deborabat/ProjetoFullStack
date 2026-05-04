import { useMemo, useState } from 'react'
import { Row, Col, Form, Spinner } from 'react-bootstrap'
import BookCard from './Bookcard'
import { useBooks } from '../contexts/BookContext'

export default function BookList() {
  const { books, loading } = useBooks()
  const [yearFilter, setYearFilter] = useState('')

  // useMemo: recalcula quando books ou yearFilter mudam
  const filteredBooks = useMemo(() => {
    if (!yearFilter) return books
    return books.filter(b => String(b.first_publish_year).startsWith(yearFilter))
  }, [books, yearFilter])

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />

  return (
    <>
      {books.length > 0 && (
        <Form.Control
          className="mb-4"
          placeholder="Filtrar por ano (ex: 199, 200...)"
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}
        />
      )}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredBooks.map((book, i) => (
          <Col key={i}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </>
  )
}