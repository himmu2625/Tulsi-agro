# Modern Parallax Image Carousel Component

A premium, reusable React carousel component designed specifically for agricultural websites with smooth parallax effects, navigation controls, and customizable features.

## 🌟 Features

### ✨ **Visual Excellence**

- **Parallax Effects**: Subtle scaling animations for premium visual appeal
- **Gradient Overlays**: Ensures text readability on any background
- **Rounded Corners**: Modern design with subtle shadows
- **Smooth Transitions**: 700ms fade and scale transitions

### 🎮 **Navigation Controls**

- **Arrow Navigation**: Left/right arrow buttons with hover effects
- **Dot Indicators**: Clickable dots for direct slide access
- **Keyboard Support**: Arrow key navigation
- **Progress Bar**: Visual progress indicator
- **Slide Counter**: Current slide display

### ⚡ **Performance & UX**

- **Auto-play**: Configurable timing with pause on hover
- **Touch Friendly**: Optimized for mobile devices
- **Responsive**: Adaptive text sizing and layout
- **Memory Efficient**: Proper cleanup and state management

## 📦 Installation

```bash
npm install framer-motion lucide-react
```

## 🚀 Basic Usage

```tsx
import { ImageCarousel } from "./components/ImageCarousel"

function MyPage() {
  return (
    <ImageCarousel
      autoPlay={true}
      autoPlayInterval={5000}
      showArrows={true}
      showDots={true}
      className="shadow-2xl"
    />
  )
}
```

## 🎛️ Advanced Usage

```tsx
import { AdvancedImageCarousel } from "./components/ImageCarousel"

function MyPage() {
  return (
    <AdvancedImageCarousel
      autoPlay={true}
      autoPlayInterval={6000}
      showArrows={true}
      showDots={true}
      showProgress={true}
      showCounter={true}
      className="shadow-2xl"
    />
  )
}
```

## 📋 Props

### ImageCarousel Props

| Prop               | Type      | Default | Description                        |
| ------------------ | --------- | ------- | ---------------------------------- |
| `autoPlay`         | `boolean` | `true`  | Enable automatic slide transitions |
| `autoPlayInterval` | `number`  | `5000`  | Interval between slides (ms)       |
| `showArrows`       | `boolean` | `true`  | Show navigation arrows             |
| `showDots`         | `boolean` | `true`  | Show dot indicators                |
| `className`        | `string`  | `""`    | Additional CSS classes             |

### AdvancedImageCarousel Props

| Prop               | Type      | Default | Description                        |
| ------------------ | --------- | ------- | ---------------------------------- |
| `autoPlay`         | `boolean` | `true`  | Enable automatic slide transitions |
| `autoPlayInterval` | `number`  | `5000`  | Interval between slides (ms)       |
| `showArrows`       | `boolean` | `true`  | Show navigation arrows             |
| `showDots`         | `boolean` | `true`  | Show dot indicators                |
| `showProgress`     | `boolean` | `true`  | Show progress bar                  |
| `showCounter`      | `boolean` | `true`  | Show slide counter                 |
| `className`        | `string`  | `""`    | Additional CSS classes             |

## 🖼️ Image Requirements

### Recommended Image Specifications

- **Resolution**: 1920x1080 or higher
- **Format**: JPG, PNG, WebP
- **Aspect Ratio**: 16:9 or 3:2
- **File Size**: < 500KB per image
- **Quality**: High-quality, professional agricultural images

### Image Categories

1. **Grain Close-ups**: Wheat, rice, pulses in detail
2. **Farm Field Macros**: Wide field shots with crops
3. **Happy Farmers**: People working in agriculture
4. **Packaging Quality**: Product packaging and presentation
5. **Harvesting Scenes**: Active harvesting and processing

## 🎨 Customization

### Styling

```tsx
// Custom styling with Tailwind classes
<ImageCarousel
  className="shadow-2xl border-4 border-green-200"
  showArrows={true}
  showDots={true}
/>
```

### Content Customization

```tsx
// Modify carouselData array in ImageCarousel.tsx
const carouselData = [
  {
    id: 1,
    image: "/your-image.jpg",
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your description text",
  },
  // ... more slides
]
```

## 🔧 Technical Details

### Dependencies

- **React**: 18+ with hooks
- **Framer Motion**: For smooth animations
- **Lucide React**: For icons
- **Tailwind CSS**: For styling

### Performance Optimizations

- **useCallback**: Prevents unnecessary re-renders
- **useEffect**: Proper cleanup of intervals
- **State Management**: Efficient state updates
- **Memory Cleanup**: Proper event listener removal

### Accessibility Features

- **Keyboard Navigation**: Arrow key support
- **ARIA Labels**: Screen reader friendly
- **Focus Management**: Proper focus handling
- **High Contrast**: Readable text overlays

## 📱 Responsive Design

### Breakpoints

- **Mobile**: 500px height, simplified controls
- **Tablet**: 600px height, enhanced navigation
- **Desktop**: Full feature set with hover effects

### Adaptive Features

- **Text Sizing**: Responsive typography
- **Touch Targets**: Mobile-friendly button sizes
- **Navigation**: Simplified mobile controls
- **Performance**: Optimized for mobile devices

## 🎯 Best Practices

### Image Optimization

1. **Compress Images**: Use tools like TinyPNG
2. **WebP Format**: Better compression and quality
3. **Responsive Images**: Multiple sizes for different screens
4. **Lazy Loading**: Implement for better performance

### Content Strategy

1. **Consistent Style**: Maintain visual consistency
2. **Clear Messaging**: Concise, impactful text
3. **Call-to-Action**: Include relevant CTAs
4. **Brand Alignment**: Match your brand colors

### Performance Tips

1. **Image Preloading**: Load images in advance
2. **Caching**: Implement proper caching strategies
3. **CDN**: Use content delivery networks
4. **Monitoring**: Track performance metrics

## 🐛 Troubleshooting

### Common Issues

**Images not loading**

```tsx
// Check image paths
image: "/images/carousel/grain-closeup.jpg" // Ensure correct path
```

**Auto-play not working**

```tsx
// Verify autoPlay prop
<ImageCarousel autoPlay={true} autoPlayInterval={5000} />
```

**Navigation not responding**

```tsx
// Check event handlers
const nextSlide = useCallback(() => {
  if (isTransitioning) return // Prevent rapid clicking
  // ... rest of logic
}, [isTransitioning])
```

### Debug Mode

```tsx
// Add console logs for debugging
useEffect(() => {
  console.log("Current slide:", currentIndex)
}, [currentIndex])
```

## 📄 License

This component is part of the Tulsi Agro website project and follows the same licensing terms.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues with the carousel component, please refer to the main project documentation or contact the development team.

---

**Note**: This carousel component is specifically designed for agricultural websites and includes pre-configured content for grain trading, farming, and agricultural services. Customize the content and styling to match your specific needs.
