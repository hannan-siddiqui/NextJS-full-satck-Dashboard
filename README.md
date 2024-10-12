# Clone the repository
git clone <repository_url>

# Navigate into the project directory
cd project-directory

# Install dependencies
npm install

# Create .env.local file (replace placeholders with actual Supabase credentials)
echo "NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>" >> .env.local

# (Optional) Install Supabase CLI if you want to run Supabase locally
npm install -g supabase

# Initialize Supabase (if needed)
supabase init

# Run the development server
npm run dev

# To build for production (optional)
# npm run build

# To preview production build (optional)
# npm run start
