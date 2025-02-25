# Project Setup

This project is a simple website that allows users to access a GitHub user's page, view their public repositories, and manage their favorite repositories (mark/unmark as favorite).

## Requirements

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/fcoiuri/casar-test
cd casar-test
```

2. **Install dependencies:**

With npm:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

## Environment Configuration

Create a file named `.env` in the root of the project and add the environment variable required to access the GitHub API:

```bash
NEXT_PUBLIC_GITHUB_TOKEN=your_token_here
```

### How to generate your GitHub access token:

1. **Go to GitHub Settings > Developer settings > Personal access tokens.**
2. **Click "Generate new token".**
3. **Select the necessary scopes (e.g., public_repo to access public repositories).**
4. **Generate the token and copy it.**
5. **Paste the token in the .env file in place of your_token_here.**

## Running the Project

To start the project in development mode, run:

With npm:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at: http://localhost:3000

## Testing

To run the unit tests:

```bash
npm run test
```

or

```bash
yarn test
```

## Additional Configuration

- This project uses Next.js and Tailwind CSS.
- Ensure that you have configured your path aliases and testing environment according to Next.js and Tailwind documentation.
- All environment variables should be configured in the .env file as shown above.

## Final Notes

This project integrates the GitHub API to fetch information about users and repositories, allowing users to view repository details and manage their favorites in a simple and intuitive way.
