# ABQVets 11ty Source Directory

This directory contains the source files for the ABQVets website, built with **Eleventy (11ty) v3**.

## 🏗 Project Architecture

- **Templating:** Nunjucks (`.njk`) for layouts and logic, Markdown (`.md`) for content.
- **Styling:** Sass (`.scss`) located in `assets/scss/`, compiled to `assets/css/main.css`.
- **UI Framework:** Bootstrap 5 (CSS via Sass, JS via CDN in `base_layout.njk`).
- **Build Tooling:** Standalone Node.js scripts and Eleventy (Vite has been removed for simplicity).

## 📂 Directory Structure

- `_data/`: Global data files (YAML/JSON/JS).
  - `master_resources.yaml`: The primary database of veteran resources.
  - `featured.yaml`: Controls the rotating featured card on the homepage.
  - `calendar.js`: Dynamically processes external calendar events.
- `_includes/`:
  - `layouts/`: Core page templates (`base_layout.njk`, `post.njk`, etc.).
  - `partials/`: Reusable components like the navbar, footer, and modals.
- `assets/`: Static assets (images, icons, compiled CSS, and client-side JS).
- `posts/`: Automatically generated articles (scraped/converted to Markdown).
- `resources/`: contains the resource detail template and manual resource pages.

## 🚀 Build Process

The project uses a custom build orchestrator located in `scripts/build.js`.

### Commands

- `npm run build`: Performs a full production build:
  1. Fetches/generates calendar events.
  2. Compiles Sass to CSS.
  3. Parses input URLs for resource previews.
  4. Runs the Eleventy build.
  5. Generates the Pagefind search index.
  6. Syncs the result to the production folder.
- `npm run dev`: Serves the already built files from the production directory using Eleventy's built-in server.
- `npm run css:build`: Manually triggers the Sass compiler.

## ⚙️ Key Features

### Resource Preview Plugin
The site uses a custom plugin (`config/eleventy-resource-preview-plugin.js`) that monitors `src/_data/input_urls.yaml`. It automatically fetches metadata (titles, descriptions, images) for these URLs and populates `src/_data/master_resources.yaml`.

### Featured Card Rotation
The homepage hero section features a rotating card. It pulls entries from `src/_data/featured.yaml` and cycles through them every 8 seconds using a lightweight inline script.

### Search
Search functionality is powered by **Pagefind**, which runs post-build to index the static HTML and provide fast, client-side search results.

## 🌐 Production Output
By default, the build process outputs the final site to `../abqvets-production`. This allows the source code and the live production files to exist in separate, clean environments.



### 8/21/25
- fixed discord linking issue
- expansion of benefits categories
- re-structring categories and interactivity (WIP Project)
- finalizing move of all data to content server for redundancy and availability
-

### 8/19/25
- security patches

###
-

### Old Build Logs (pre-migration)
| 70ab8ad | miguel   | Mon, 16 Jun 2025 21:14:18 -0600 | update nav                                                    |
| ------- | -------- | ------------------------------- | ------------------------------------------------------------- |
| 55aa452 | miguel   | Mon, 16 Jun 2025 21:03:42 -0600 | updated crisis functions                                      |
| 6ced1b1 | miguel   | Thu, 5 Jun 2025 13:51:51 -0600  | added new tools breathing and leaves                          |
| a189220 | miguel   | Fri, 30 May 2025 15:25:03 -0600 | streamlined systems                                           |
| fb02eb0 | miguel   | Fri, 30 May 2025 14:29:20 -0600 | cleanup and trimmed                                           |
| 191f732 | miguel   | Fri, 30 May 2025 13:57:43 -0600 | cleanup                                                       |
| 4e7076f | miguel   | Fri, 30 May 2025 13:55:37 -0600 | temporary push                                                |
| 1404e41 | miguel   | Fri, 30 May 2025 13:25:48 -0600 | breathing app                                                 |
| 1f7ae66 | miguel   | Thu, 29 May 2025 23:47:14 -0600 | tweaks and automation setups                                  |
| 4afe250 | miguel   | Thu, 29 May 2025 21:17:35 -0600 | complete update                                               |
| ad37f1a | miguel   | Thu, 29 May 2025 20:45:32 -0600 | complete re-structure                                         |
| 21cbc16 | miguel   | Thu, 29 May 2025 11:24:06 -0600 | uploads integrated                                            |
| 8df7d76 | miguel   | Wed, 28 May 2025 14:42:52 -0600 | changed nav and modals                                        |
| 7ef1efc | miguel   | Wed, 28 May 2025 14:32:30 -0600 | integrated discord updated nav                                |
| 37a4461 | miguel   | Tue, 27 May 2025 12:06:35 -0600 | fixed alignment and grammar                                   |
| 3a2626f | miguel   | Tue, 27 May 2025 00:53:03 -0600 | tweaks to flow                                                |
| f04826c | miguel   | Tue, 27 May 2025 00:51:37 -0600 | ds                                                            |
| 08c044f | miguel   | Tue, 27 May 2025 00:50:26 -0600 | tweaks on form                                                |
| 6a8e729 | Mike     | Tue, 27 May 2025 00:24:08 -0600 | Create CNAME                                                  |
| 0fdbf9d | miguel   | Tue, 27 May 2025 00:22:19 -0600 | fixed redirects                                               |
| 4388f1d | miguel   | Tue, 27 May 2025 00:12:14 -0600 | flush and refresh of all files                                |
| 986b32f | miguel   | Tue, 27 May 2025 00:07:37 -0600 | fixed ac directory                                            |
| 95fded8 | miguel   | Tue, 27 May 2025 00:04:26 -0600 | major revamp - see changelog                                  |
| d15db02 | miguel   | Sun, 25 May 2025 23:17:42 -0600 | major cosmetic changes. Addition of Dr. Y section and styling |
| c9f1322 | miguel   | Sun, 25 May 2025 23:11:40 -0600 | modifications                                                 |
| e9592a5 | Mike     | Sun, 6 Apr 2025 20:04:49 -0600  | Create b00f896c6229ce120555c57d09a560f4.txt                   |
| ed09099 | miguel   | Wed, 2 Apr 2025 22:16:05 -0600  | add print to calendar                                         |
| 3e9afff | miguel   | Wed, 2 Apr 2025 21:31:52 -0600  | added calendar and some tweaks                                |
| 3d86be2 | miguel   | Mon, 24 Mar 2025 21:23:08 -0600 | link preview 30% implemented                                  |
| 8425d6e | miguel   | Mon, 24 Mar 2025 14:02:54 -0600 | fixed linking issues                                          |
| 88495e1 | miguel   | Mon, 24 Mar 2025 13:44:43 -0600 | click to call functions                                       |
| 4f5384b | miguel   | Mon, 24 Mar 2025 13:40:28 -0600 | major changes to styling                                      |
| d19ba2a | miguel   | Mon, 24 Mar 2025 12:33:27 -0600 | crisis number                                                 |
| 6ca53cb | miguel   | Mon, 24 Mar 2025 10:04:58 -0600 | fixes                                                         |
| f38d87e | miguel   | Sun, 23 Mar 2025 17:39:31 -0600 | cleaned up files                                              |
| e5a1214 | miguel   | Sun, 23 Mar 2025 17:35:57 -0600 | cleaned up files                                              |
| 81ba5a7 | miguel   | Sun, 23 Mar 2025 17:29:26 -0600 | tweaks                                                        |
| d4644e6 | miguel   | Sun, 23 Mar 2025 17:27:45 -0600 | fixing CNAME issues                                           |
| 87a9013 | Mike     | Sun, 23 Mar 2025 17:24:45 -0600 | Create CNAME                                                  |
| 574d16c | miguel   | Sun, 23 Mar 2025 17:07:31 -0600 | updated menu                                                  |
| dd4c50c | miguel   | Sun, 23 Mar 2025 15:53:57 -0600 | fixes for viewPoint                                           |
| 477e4c8 | Mike     | Sun, 23 Mar 2025 15:42:44 -0600 | Create CNAME                                                  |
| efa4438 | miguel   | Sun, 23 Mar 2025 15:12:03 -0600 | overhaul of css styling and routing of .com domain            |
| 1b3b826 | Mike     | Fri, 21 Mar 2025 11:43:29 -0600 | Create CNAME                                                  |
| bd6edb1 | mike-hmg | Thu, 26 Sep 2024 22:57:17 -0600 | added some goodies                                            |
| 85151c5 | mike-hmg | Thu, 26 Sep 2024 19:01:38 -0600 | few tweaks and added new section                              |
| d7cbeff | mike-hmg | Tue, 24 Sep 2024 23:30:01 -0600 | implemented jekyll                                            |
| 04b985d | Mike     | Thu, 19 Sep 2024 08:44:38 -0600 | Update index.html                                             |
| d60e930 | Mike     | Thu, 19 Sep 2024 08:44:19 -0600 | Update index.html                                             |
| f2a9657 | Mike     | Wed, 18 Sep 2024 22:13:52 -0600 | Update index.html                                             |
| 186318a | Mike     | Wed, 18 Sep 2024 22:12:57 -0600 | Update index.html                                             |
| 282e4bf | Mike     | Wed, 18 Sep 2024 22:08:27 -0600 | Add files via upload                                          |
| b59750c | Mike     | Wed, 18 Sep 2024 22:06:17 -0600 | Update index.html                                             |
| 4c3bb8a | Mike     | Wed, 18 Sep 2024 22:04:21 -0600 | Update index.html                                             |
| 3bdcc3f | Mike     | Wed, 18 Sep 2024 20:10:14 -0600 | Update index.html                                             |
| 62e21dc | Mike     | Wed, 18 Sep 2024 19:46:02 -0600 | Update index.html                                             |
| 4aaebcf | Mike     | Wed, 18 Sep 2024 17:46:15 -0600 | Update index.html                                             |
| 5bb9f83 | Mike     | Wed, 18 Sep 2024 17:41:55 -0600 | Update index.html                                             |
| 4cdc7da | Mike     | Wed, 18 Sep 2024 17:38:44 -0600 | Update index.html                                             |
| 3d21cb8 | Mike     | Wed, 18 Sep 2024 17:34:12 -0600 | Update index.html                                             |
| 25ee361 | Mike     | Wed, 18 Sep 2024 17:25:36 -0600 | Update index.html                                             |
| 020a9b2 | Mike     | Wed, 18 Sep 2024 16:48:24 -0600 | Update index.html                                             |
| 9f1123b | Mike     | Wed, 18 Sep 2024 16:46:42 -0600 | Update index.html                                             |
| 63a45f5 | Mike     | Wed, 18 Sep 2024 16:44:16 -0600 | Update index.html                                             |
| f168d4e | Mike     | Wed, 18 Sep 2024 16:43:24 -0600 | Update index.html                                             |
| d263312 | Mike     | Wed, 18 Sep 2024 16:41:33 -0600 | Update index.html                                             |
| 7be6568 | Mike     | Wed, 18 Sep 2024 16:40:34 -0600 | Update index.html                                             |
| f9ffa4d | Mike     | Wed, 18 Sep 2024 16:39:27 -0600 | Update index.html                                             |
| b913149 | Mike     | Wed, 18 Sep 2024 16:38:15 -0600 | Update index.html                                             |
| 036921d | Mike     | Wed, 18 Sep 2024 16:34:55 -0600 | Create index.html                                             |
| 37bb6b0 | Mike     | Wed, 18 Sep 2024 16:01:15 -0600 | README.md                                                     |
| f45b65c | Mike     | Sat, 14 Sep 2024 16:33:43 -0600 | Update README.md                                              |
| a8e25c9 | Mike     | Sat, 14 Sep 2024 02:24:25 -0600 | Update README.md                                              |
| e80e36e | Mike     | Sat, 14 Sep 2024 02:22:56 -0600 | Update README.md                                              |
| 4cd25b4 | Mike     | Sat, 14 Sep 2024 02:21:35 -0600 | Initial commit                                                |

