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

Include installation instructions. Make sure to specify node versions.

## Adding a Markdown page
todo this

## Adding an Interactive Page
todo this

## Removing Pages
todo this

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:
```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```