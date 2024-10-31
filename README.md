# Accessibly Wordpress Widget

## Prerequisites for deployment
1. [Install subversion](https://formulae.brew.sh/formula/subversion)

## 🚀 Setup
1. Clone the repository in plugins directory of you WP instance
2. Install frontend node module packages `cd frontend && npm install`
3. Install PHP-composer dependencies `composer install`
4. Start development mode `cd frontend && npm run dev`
5. To run in production `cd frontend && npm run build`

### Tips

For a fast, easy, and reliable WordPress local dev server, use [Local by Flywheel](https://localwp.com/). This will save you time setting up WordPress on your computer!

----

### Deployment

1. From your root directory run this command to create `otm-accessibly` folder with svn repo data.
```sh
$ svn co http://plugins.svn.wordpress.org/otm-accessibly
```

2. Run `prepare-build` script which prepares for release
```sh
$ ./scripts/prepare-build.sh
```

3. cd `otm-accessibly` and commit changes.  ``. 
```sh
$ svn ci -m 'Your message'
```
3.1 If the commit fails because of ‘Access forbidden’ and you know you have commit access, add your username and password to the check-in command.
```sh
$ svn ci -m 'Your message' --username your_username --password your_password
```
**For svn auth credentials ask your team lead (wordpress.org credentials).**
4. Deploy changes from root
```sh
$ svn up
```
5. Check your svn repository [here](https://plugins.trac.wordpress.org/browser/otm-accessibly/trunk/accessibly-plugin.php)

More info about svn commands and options [Documentation](https://developer.wordpress.org/plugins/wordpress-org/how-to-use-subversion/)
