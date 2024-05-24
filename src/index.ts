export const handler = async(event: { name: string }) => {
    const result: string = event.name ? `Nice work ${event.name}!` : 'Nice work!';
    return result;
}