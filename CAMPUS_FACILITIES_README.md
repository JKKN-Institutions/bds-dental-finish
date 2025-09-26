# Campus Facilities Component

## Overview
A modern, interactive campus facilities section for the JKKN Dental College website. This component showcases the various facilities available on campus with an engaging, animated design.

## Features

### 🎨 Modern Design
- **Gradient Backgrounds**: Beautiful gradient overlays for each facility card
- **Animated Elements**: Smooth animations using Framer Motion
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Cards**: Click to expand and see detailed features

### 🚀 Interactive Elements
- **Expandable Cards**: Click any facility card to see detailed features
- **Hover Effects**: Smooth hover animations and transitions
- **Animated Stats**: Key statistics with staggered animations
- **Virtual Tour CTA**: Call-to-action for campus tours

### 📱 Responsive Design
- **Mobile Optimized**: Touch-friendly interface
- **Tablet Friendly**: Optimized layouts for medium screens
- **Desktop Enhanced**: Full feature set on larger screens
- **Flexible Grid**: Adaptive grid system

## Facilities Showcased

1. **Modern Dental Clinics** 🦷
   - 50+ Dental Chairs
   - Digital X-Ray Systems
   - 3D Imaging Technology
   - Sterilization Units
   - Emergency Care Setup
   - Patient Comfort Areas

2. **Advanced Laboratories** 🧪
   - Pre-clinical Labs
   - Dental Materials Lab
   - Microbiology Lab
   - Pathology Lab
   - Research Facilities
   - Digital Lab Equipment

3. **Digital Learning Center** 💻
   - Smart Classrooms
   - Computer Labs
   - E-Learning Platforms
   - Virtual Reality Setup
   - Online Resources
   - 24/7 Wi-Fi Access

4. **Library & Resource Center** 📚
   - 10,000+ Books
   - Online Journals
   - Study Spaces
   - Digital Archives
   - Research Support
   - Quiet Zones

5. **Student Recreation Area** 🏃‍♂️
   - Fitness Center
   - Indoor Games
   - Outdoor Sports
   - Cafeteria
   - Student Lounge
   - Event Spaces

6. **Hostel & Accommodation** 🏠
   - Modern Hostels
   - 24/7 Security
   - Wi-Fi Enabled
   - Dining Facilities
   - Laundry Services
   - Medical Support

## Technical Implementation

### Dependencies
- **Framer Motion**: For smooth animations
- **React Hooks**: useState for interactive state management
- **TailwindCSS**: For styling and responsive design
- **TypeScript**: For type safety

### Key Components
- **FacilityCard**: Individual facility display component
- **CampusFacilities**: Main container component
- **Interactive Stats**: Animated statistics display
- **Virtual Tour CTA**: Call-to-action section

### Animation Features
- **Staggered Animations**: Cards animate in sequence
- **Hover Effects**: Scale and shadow transitions
- **Expand/Collapse**: Smooth height animations
- **Background Elements**: Floating decorative elements

## Usage

```tsx
import CampusFacilities from './components/campus-facilities';

// In your page component
<section id="facilities">
  <CampusFacilities />
</section>
```

## Customization

### Adding New Facilities
To add a new facility, update the `facilities` array in the component:

```tsx
{
  title: "New Facility",
  description: "Description of the facility",
  icon: "🎯",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  color: "from-red-500 to-pink-500"
}
```

### Modifying Colors
Each facility uses TailwindCSS gradient classes. You can customize the color schemes by changing the `color` property.

### Updating Stats
Modify the stats array to display different campus statistics:

```tsx
{ number: "100+", label: "Students", icon: "👥" }
```

## Performance Optimizations

- **Lazy Loading**: Animations trigger on viewport entry
- **Optimized Animations**: Hardware-accelerated transforms
- **Minimal Re-renders**: Efficient state management
- **Responsive Images**: Optimized for different screen sizes

## Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG compliant color schemes

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation for older browsers 