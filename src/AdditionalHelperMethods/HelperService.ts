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

  convertRegularUrlToEmbedUrl(regularUrl: string | undefined) {
    // Define a regular expression pattern to match YouTube regular URLs
    const regularUrlPattern =
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]+)/;

    // Use regex to extract the video ID and query string from the regular URL
    const match = regularUrl?.match(regularUrlPattern);

    if (match) {
      const videoId = match[1];
      const queryString = regularUrl?.split("?")[1] || "";
      // Construct the embed URL using the video ID and query string
      const embedUrl = `https://www.youtube.com/embed/${videoId}?${queryString}`;
      return embedUrl;
    }
  }

  truncateTitle(text: string, maxLength: number): string {
    if (text.split(" ").length > maxLength) {
      return text.split(" ").splice(0, maxLength).join(" ") + "...";
    }
    return text;
  }

  formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use 24-hour format
    };

    const date = new Date(dateString);
    return date.toLocaleString("en-US", options);
  };
}

export default new HelperService();
