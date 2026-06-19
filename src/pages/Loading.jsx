import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { MutatingDots } from "react-loader-spinner"
import "./loading.css"

function Loading() {
  const navigate = useNavigate()

  useEffect(() => {
    const t = setTimeout(() => navigate("/dashboard", { replace: true }), 900)
    return () => clearTimeout(t)
  }, [navigate])

  return (
    <div className="loading-page">
      <div className="loading-card">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          secondaryColor="#4fa94d"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  )
}

export default Loading
