@CreateDigestForm = React.createClass

  render: ->
    `<form className='create-digest-form'>
      <input type='email' placeholder='Enter your email'/>
      <CompositeTextField name='source_urls' initialPlaceholder="Enter a URL to an RSS feed" placeholder="Enter another RSS URL, if you want" />

      <input type="submit" value="Send my first Digest"/>
    </form>`

