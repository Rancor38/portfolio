# Dynamic Resume Component

This document explains how the Resume component in this portfolio dynamically imports data from other components.

## How It Works

The Resume component maintains its data updated using the following mechanisms:

### 1. Data Sources

-   **Contact Information**: Imported from `contactData.js`
-   **Skills**: Imported from `skillsData.js` (which mirrors data from the Skills component)
-   **Projects**: Imported from `projectsData.js` (which mirrors data from the Projects component)
-   **Base Resume Data**: Core information stored in `resumeData.js`

### 2. Data Flow

```
Skills Component    Projects Component    Contact Component
       |                   |                    |
       v                   v                    v
  skillsData.js      projectsData.js      contactData.js
       |                   |                    |
       |                   v                    |
       +---------> resumeData.js <--------------+
                         |
                         v
                   Resume Component
```

### 3. Updates

When you update information in any of the source components:

1. The corresponding data file should be updated
2. The Resume component will load the latest data on next mount
3. You can also use the "Refresh Data" button in the Resume component to force an update

## How to Update Resume Content

### To Update Contact Information

Edit the `contactData.js` file in the `src/data` directory.

### To Update Projects

Edit the `projectsData.js` file or update the Projects component and sync the changes to `projectsData.js`.

### To Update Skills

Edit the `skillsData.js` file or update the Skills component and sync the changes to `skillsData.js`.

### To Update Work Experience

Edit the `professionalExperience` array in `resumeData.js` file in the `src/data` directory. Add new job entries at the beginning of the array (most recent first).

### To Update Education

Edit the `education` array in `resumeData.js` file. Add new education entries at the beginning of the array (most recent first).

## Technical Details

-   The Resume component uses imports without cache-busting timestamp parameters to ensure stability
-   A robust refresh mechanism with loading indicators allows manual updates when needed
-   Comprehensive error handling displays user-friendly messages if data loading fails
-   The resume data structure in `resumeData.js` has functions to merge data from different sources

## Error Handling

The system includes comprehensive error handling:

-   If dynamic data fails to load, the system falls back to static data
-   User-friendly error messages are displayed if data cannot be loaded
-   Console warnings provide debugging information for developers
-   A "Try Again" button allows users to retry loading if errors occur

## Troubleshooting

If you encounter issues with the resume component:

1. **Loading Issues**: Check browser console for errors related to data imports
2. **Missing Data**: Verify the data exists in the source components
3. **Style Issues**: Check for CSS conflicts in the Resume.css file
4. **Refresh Problems**: Verify network connections and try clearing browser cache

This approach ensures your resume always stays up-to-date with the rest of your portfolio without requiring manual duplication of information.
