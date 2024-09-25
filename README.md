# Enes100 Website

## Editing Pages
If you are making a small edit (typo fix, adding a sentence, etc.), you can use the online GitHub editor. 
If you are making a larger edit, you should clone the repository and run the website locally.

### Identify the correct file
Find the page you are interested in editing. For example : enes100.umd.edu/documentation/faq

Determine route part of the URL. This come after the first /.  (For our example: `/documentation/faq`)

Go to the src folder, then in there into the routes folder. Inside this folder, the routes are organized in a similar way to the URL.

For our example, we would open the documentation folder, then the faq folder, then edit +page.svelte

*See here https://learn.svelte.dev/tutorial/pages for more information on how routing works.*

### Edit the file

Many files have both HTML and markdown in them.

Markdown is within a special markdown tag. Anywhere between <MarkdownContent> and </MarkdownContent> is markdown.

Example:
```html
<MarkdownContent>
# This is markdown
html in here will also be rendered as html, so you can mix and match.
</MarkdownContent>
this will be rendered as html
<a href=""></a>
```

Add a <MarkdownContent> tag to the file to use markdown anywhere. Make sure it is imported with a 
```
<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>
```
(do not have two script tags, just place `import MarkdownContent from "$lib/MarkdownContent.svelte";` in the existing script tag if one exists)

Note: details / summary tags are dropdowns. You'll get a feel for this.

### Save the file


## Editing Interactive Pages
You will need to know HTML, JS, and CSS to edit these pages. You can find the source code in the src/routes directory.
The index page is an example of an interactive page - it interactively calculates the lab status.

To edit these pages, you should be testing locally, because likely what you want to do won't work the first time.

To run the website locally (like, on localhost and not enes100.umd.edu) you need Node.js and git installed, and a text editor.

When developing this project, we used Node v22.3.0 and git 2.45.1. You can check your version by running `node -v` and `git -v` 
in the terminal. ("Command Prompt" on Windows, "Terminal" on Mac, "Terminal" on Linux). If those commands fail with something
along the lines of "node is not recognized as an internal or external command", you need to install Node.js and/or git.

Clone the repository. (If you don't know how to do this look it up.)

Navigate to the repository in the terminal. (If you don't know how to do this look it up.)

Run `npm install` to install the dependencies.

Run `npm run dev` to start the development server. You will see something like

```
VITE v4.5.3  ready in 1605 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

Click on the link to open the website in your browser. You can now edit the files and see the changes as soon as you save the file.
(Top tip - set up autosave in your editor so as soon as you open your browser it automatically reloads the page.)

Edit your page. Then, commit and push changes!

## Adding a Markdown page
Determine the route part of the URL. This comes after the first /. For example, `/documentation/faq`.

Go to the src folder, then in there into the routes folder. Inside this folder, the routes are organized in a similar way to the URL.

For our example, we would open the documentation folder, then the faq folder, then create a new file called +page.svelte

Add the following code to the file:
```html
<script>
    import MarkdownContent from "$lib/MarkdownContent.svelte";
</script>

<MarkdownContent>
# This is markdown
</MarkdownContent>
```

But mostly, look at other files and learn from them.

## Adding an Interactive Page
Same as markdown content page, but then just add your interactive content there.

## Removing Pages
Search for any references to the page in links and such. Remove them. Then delete the file and containing folder.

(Example, to remove faq page you would remove the faq folder (including page.svelte in that folder).

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```