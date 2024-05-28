import { useLoaderData } from "react-router-dom"

const Categories = () => {
    const data = useLoaderData()
    console.log(data)
  return (
    <div>
      <h1>This is categories section</h1>
    </div>
  )
}

export default Categories
