import { Form, Button } from 'react-bootstrap';

const SelectTableRow = ({col_choices, updateSelectedCols, selectAllCols}) => {
  return (
    <>
      <Form.Group controlId="col_choice" className="mb-3">
        <br />
        <Form.Label>
          Choose column to show
          <Button
            variant="primary"
            style={{marginLeft: '15px'}}
            onClick={selectAllCols}
          >
            Select All
          </Button>
        </Form.Label>
        <Form.Control
          as="select"
          multiple
          onChange={e => updateSelectedCols([...(e.target.selectedOptions)].map(item => item.value))}
        >
          {col_choices.map(ac => {
            return (
              <option key={ac} value={ac}>{ac}</option>
            )
          })}
        </Form.Control>
      </Form.Group>
    </>
  )
}

export default SelectTableRow;