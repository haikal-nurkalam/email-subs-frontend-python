# Email Subs Frontend Python

I created this project for email automation using Python, React, Tailwind, and Supabase. You can find the Backend here: [Email Subs backend Repo](https://github.com/haikal-nurkalam/email-subs-backend-python.git)

## Demo
Try the demo app here: [email.heykals.com](https://email.heykals.com/). Make sure to use your email.

## Why I Chose These Stacks
- **Python**: I can integrate it faster with Supabase, the code is cleaner, and I challenged myself to integrate Supabase with this language.
- **React**: This is used to build the frontend and to call Supabase. It’s also fast, so I decided to use it for this project.
- **Tailwind**: I didn’t want to write vanilla CSS, and because I wanted to speed up development, I chose this CSS framework.
- **Supabase**: Similar to Firebase in functionality. I didn’t want to set up & configure my own backend, so I used Supabase, and it has proven to be reliable and fast.

## How to Install this Program
### Supabase
First, you need a Supabase account and project.
You can find it [here](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs).

Below is my table specification:
- `id`, primary key, `int8`
- `created_at`, `timestamptz`
- `nama`, `text`
- `email`, `text`
- `no_telp`, `text`
- `status`, `bool`

You can customize it.

### Let's Install It
1. Download my repo.
2. Navigate to the repository:
   ```bash
   cd email-subs-frontend-python
   ```
3. Install all packages:
   ```bash
   npm i
   ```
4. Create an env file:
   Create a `.env.local` file in the root folder and add your Supabase URL and Supabase Key:
   ```plaintext
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_KEY=your_supabase_key
   ```
5. Modify the table name according to your Supabase table:
   Insert your table name in `Home.jsx` and customize it:
   ```javascript
   try {
      const { data, error } = await supabase
        .from("your_table_name")
        .insert([
          { nama: nama, email: email, no_telp: no_telp, status: false },
        ]);

      window.location.reload();
      setIsLoading(true);
   }
   ```
6. Start your project:
   ```bash
   npm start
   ```

# Thank You
If you have any questions, feel free to reach out to me on GitHub or LinkedIn. Thank you!
