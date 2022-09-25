export function convertStringToMinutes(hour: string): number {

    const [hours, minutes] = hour.split(':').map(Number)

    return (hours * 60) + minutes

}