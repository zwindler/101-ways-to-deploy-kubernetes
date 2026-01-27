# SolutionCard Component

A modern, reusable Astro component for displaying Kubernetes deployment solutions as beautiful cards.

## Overview

The `SolutionCard.astro` component provides a consistent, visually appealing way to display Kubernetes deployment solutions with support for:
- Multiple deployment states (active, deprecated, abandoned)
- Open source vs proprietary indicators
- Technology dependencies ("Based on")
- Tags and categorization
- References and documentation links
- Full dark mode support
- Responsive design

## Component Location

- **Component**: `src/components/SolutionCard.astro`
- **Demo Page**: `src/pages/demo.astro`

## Props Interface

```typescript
interface Props {
  solution: {
    name: string;                    // Solution name (required)
    category: string;                // Deployment category (required)
    url: string;                     // Main URL (required)
    publisher?: string;              // Publisher or organization
    description?: string;            // Short description
    license?: string;                // License type
    open_source?: boolean;           // Open source indicator
    based_on?: string[];            // Technology dependencies
    tags?: string[];                // Tags for categorization
    cloud_providers?: string[];     // Supported cloud providers
    status?: "active" | "deprecated" | "abandoned";  // Solution status
    references?: {                  // External references
      title: string;
      description?: string;
      language: string;
      url: string;
      type: string;
    }[];
  };
}
```

## Visual Structure

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │  K   │   k3s                           ⭐ OSS       │
│  └──────┘   Rancher                                     │
├─────────────────────────────────────────────────────────┤
│  Lightweight Kubernetes distribution for IoT and        │
│  edge computing                                         │
├─────────────────────────────────────────────────────────┤
│  Based on: [kubeadm] [k3s]                              │
│                                                         │
│  Tags: [production] [lightweight] [edge] [iot]          │
├─────────────────────────────────────────────────────────┤
│  📄 Apache 2.0    │    📚 2 refs    │    🔗 GitHub     │
└─────────────────────────────────────────────────────────┘
```

## Features

### Card Design
- ✅ Rounded corners (`rounded-xl`)
- ✅ Shadow with hover effect (`shadow-md` → `shadow-xl`)
- ✅ Border with hover color change (gray → blue)
- ✅ Smooth transitions (`transition-all duration-300`)
- ✅ Responsive and flexible height

### Header Section
- Gradient blue icon placeholder with first letter of solution name
- Bold solution name with truncation for long names
- Publisher name in smaller gray text
- Green "OSS" badge for open source projects
- Checkmark icon in OSS badge

### Status Badges
Status badges appear in the top-right corner (only for non-active solutions):
- **Deprecated**: Yellow background (`bg-yellow-100`)
- **Abandoned**: Red background (`bg-red-100`)
- **Active**: No badge shown

### Description
- 2-line clamp to maintain consistent card heights
- Gray text color for readability

### Based On Section
- Only shown if dependencies exist
- "Based on:" label in gray
- Purple pills for each technology

### Tags Section
- Gray pills for consistent styling
- Automatically limits to 4 visible tags
- Shows "+N" pill if more than 4 tags exist

### Footer
- Subtle background (`bg-gray-50 dark:bg-gray-900/50`)
- License with document icon
- References count with book icon
- Smart link detection (GitHub icon vs external link icon)
- Links open in new tab

### Dark Mode
All colors and components have dark mode variants:
- Background: `bg-white dark:bg-gray-800`
- Text: `text-gray-900 dark:text-white`
- Borders: `border-gray-200 dark:border-gray-700`
- All badges and pills have dark mode support

## Usage Example

```astro
---
import SolutionCard from "../components/SolutionCard.astro";

const solutions = [
  {
    name: "k3s",
    category: "Selfhosted",
    publisher: "Rancher",
    url: "https://github.com/k3s-io/k3s",
    description: "Lightweight Kubernetes distribution for IoT and edge computing",
    license: "Apache 2.0",
    open_source: true,
    tags: ["production", "lightweight", "edge", "iot"],
    status: "active",
    references: [
      { title: "K3S et Cilium", language: "fr", url: "#", type: "article" },
    ],
  },
];
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {solutions.map((solution) => (
    <SolutionCard solution={solution} />
  ))}
</div>
```

## Demo Page

A demo page is available at `src/pages/demo.astro` showing:
- 4 example cards with different configurations
- Active, deprecated, and abandoned states
- Open source and proprietary solutions
- Solutions with and without "Based on" dependencies
- Tag overflow handling (more than 4 tags)
- Dark mode toggle functionality

To view the demo:
1. Set up an Astro project
2. Copy the component and demo files
3. Run `npm run dev`
4. Navigate to `/demo`

## Integration with Data

This component is designed to work with the solutions data from `data/solutions.yaml`. Each solution in the YAML file can be passed directly to the component:

```astro
---
import SolutionCard from "../components/SolutionCard.astro";
import { readFileSync } from 'fs';
import yaml from 'yaml';

// Adjust path based on your file location
// From src/pages/, use: '../../data/solutions.yaml'
const solutionsData = yaml.parse(
  readFileSync('../../data/solutions.yaml', 'utf8')
);
---

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {solutionsData.solutions.map((solution) => (
    <SolutionCard solution={solution} />
  ))}
</div>
```

## Browser Support

The component uses modern CSS features:
- CSS Grid
- Flexbox
- CSS Variables (via Tailwind)
- `line-clamp` for text truncation

These features are supported in all modern browsers.

## Customization

The component uses Tailwind CSS classes and can be customized by:
1. Modifying the Tailwind classes in the component
2. Extending Tailwind configuration
3. Adding custom CSS in the `<style>` section

## Dependencies

- **Astro**: Framework for component rendering (build-time)
- **Tailwind CSS**: Utility-first CSS framework for styling (build-time)
- **Note**: While the component requires Tailwind CSS to be configured in your project's build system, there are no runtime JavaScript dependencies. The component outputs pure HTML/CSS.

## License

This component is part of the "101 Ways to Deploy Kubernetes" project.
