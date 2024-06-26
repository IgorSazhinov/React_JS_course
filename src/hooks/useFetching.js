import { useState } from "react"

export function UseFetching (callback) {
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] =useState('')
    const fetching = async () => {
        try {
            setIsloading(true)
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsloading(false)
        }
    }
    return [fetching, isLoading, error]
}