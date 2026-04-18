/**
 * Curated Unsplash photo IDs for each theme.
 * All images are royalty-free under the Unsplash License.
 * Format a URL with `unsplashUrl(id, width)` to request a sized, optimized image.
 */

export interface StudioImage {
  id: string;
  alt: string;
  credit: string;
}

export const unsplashUrl = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage: StudioImage = {
  id: "1551288049-bebda4e38f71", // business / data charts neutral
  alt: "Data review interface over an abstract blue background.",
  credit: "Campaign Creators / Unsplash",
};

export const speechImage: StudioImage = {
  id: "1516280440614-37939bbacd81", // studio microphone
  alt: "Studio microphone in a dim recording room.",
  credit: "Will Francis / Unsplash",
};

export const imageImage: StudioImage = {
  id: "1535378620166-273708d44e4c", // camera sensor / lens macro
  alt: "Macro photograph of a camera lens array.",
  credit: "Bernard Hermant / Unsplash",
};

export const videoImage: StudioImage = {
  id: "1494522855154-9297ac14b55f", // autonomous car sensor view / dashcam
  alt: "Night driving view from inside a vehicle.",
  credit: "Alessio Lin / Unsplash",
};

export const aboutImage: StudioImage = {
  id: "1522071820081-009f0129c71c", // team of people at desks
  alt: "Annotation studio team collaborating at desks.",
  credit: "Annie Spratt / Unsplash",
};

export const workImage: StudioImage = {
  id: "1581094794329-c8112a89af12", // robotic arm / AI research
  alt: "Robotic arm used in an AI research lab.",
  credit: "Alex Knight / Unsplash",
};

export const contactImage: StudioImage = {
  id: "1551434678-e076c223a692", // developer team discussion
  alt: "Team discussing work on laptops in a modern office.",
  credit: "Campaign Creators / Unsplash",
};

export const modalityImages: Record<"speech" | "image" | "video", StudioImage> =
  {
    speech: speechImage,
    image: imageImage,
    video: videoImage,
  };
