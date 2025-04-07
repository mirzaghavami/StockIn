// Custom error converting function in case the type of error is different
export function getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message
    return String(error)
}
