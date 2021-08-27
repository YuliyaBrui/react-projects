type TextContent = { textContent: string }
export function SearchButton({ textContent }: TextContent) {
  return (
    <button className="button_submit" type="submit">
      {textContent}
    </button>
  )
}
