import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$rocketseat",
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brighness(0.8)'
  },
})

export default function Home() {
  return (
    <Button>
      <h1>
        <span>Send </span>
        E-mail 
      </h1>
    </Button>
  )
}
