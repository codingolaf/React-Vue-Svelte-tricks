export default function RecipientsDisplay({
  recipients,
}: {
  recipients: string[]
}) {
  return (
    <>
      <p>{recipients[0]}</p>
    </>
  )
}
