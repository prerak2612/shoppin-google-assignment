# Google Web Page Clone

A responsive clone of the Google web page built using **Next.js**, **Tailwind CSS**, and **TensorFlow.js**. This project includes additional features such as image analysis and related image generation using TensorFlow.js and SearchAPI.io.

## Features

1. **Responsive Design**: The web page is fully responsive, ensuring optimal viewing on mobile devices, tablets, and desktops.

2. **Interactive Elements**:
   - Hovering over the search bar, microphone icon, and Google Lens icon displays tooltips with additional information.

3. **Microphone Feature**:
   - Clicking the microphone icon redirects the user to the `/microphone` route.
   - The microphone page displays its own dedicated UI.

4. **Google Lens Feature**:
   - Clicking the Google Lens icon redirects the user to the `/google-lens` route.
   - The Google Lens page allows users to analyze images.
   - Image analysis is powered by **TensorFlow.js**, which generates the top query related to the image.
   - The top query is sent to **SearchAPI.io** to fetch related images, which are displayed on the page.

## Running the Project

To run the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**
   Install all required dependencies using npm:
   ```bash
   npm install
   ```

3. **Run the Development Server**
   Start the development server:
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

- **`/pages`**: Contains all the Next.js pages including routes for the main page, microphone, and Google Lens features.
- **`/components`**: Contains reusable UI components such as search bar, header, etc.
- **`/styles`**: Tailwind CSS configuration and global styles.
- **`/utils`**: Utility functions for TensorFlow.js and API interactions.

## Dependencies

- **Next.js**: Framework for building server-side rendered React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TensorFlow.js**: Library for machine learning in JavaScript.
- **SearchAPI.io**: API for fetching related images based on analyzed image queries.

## Additional Details

- The project implements best practices for user interaction, such as tooltips and smooth routing.
- TensorFlow.js handles image analysis efficiently, providing a seamless user experience.
- SearchAPI.io integration ensures accurate and fast fetching of related images based on the analyzed query.


