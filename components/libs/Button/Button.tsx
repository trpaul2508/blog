type Props = {
  icon?: string
}

const Button = ({ icon }: Props) => {
  return (
    <button>
      {icon && <span className="mate"></span>}
      heelo
    </button>
  )
}

export default Button
