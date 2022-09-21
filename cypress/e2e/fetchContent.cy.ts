import ContentType from "../../src/types/ContentType"
import fetchContent from "../../src/utils/fetchContent"

describe('fetch content', () => {
  it('should return to the content', async () => {
    const good: ContentType = {
      url: "https://yu-ko-ba.github.io/what-is-the-date-today/",
      title: "今日の日付",
      description: "現在の日付を表示するWebアプリ",
      image: "https://raw.githubusercontent.com/yu-ko-ba/what-is-the-date-today/main/screenshot.png"
    }

    const content = await fetchContent("https://yu-ko-ba.github.io/what-is-the-date-today/")

    expect(content.title).to.equal(good.title)
    expect(content.description).to.equal(good.description)
    expect(content.image).to.equal(good.image)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
