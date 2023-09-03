class HelperService {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  convertToEmbedUrl(regularUrl: string | undefined) {
    const videoId = regularUrl?.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/i,
    );

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId[1]}`;
    }

    return "url not found";
  }

  truncateTitle(text: string, maxLength: number): string {
    if (text.split(" ").length > maxLength) {
      return text.split(" ").splice(0, maxLength).join(" ") + "...";
    }
    return text;
  }
}

export default new HelperService();
