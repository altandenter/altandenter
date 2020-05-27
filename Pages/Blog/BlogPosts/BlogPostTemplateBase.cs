using Microsoft.AspNetCore.Components;

namespace AltAndEnter.Pages.Blog.BlogPosts
{
    public class BlogPostTemplateBase : ComponentBase
    {
        [Parameter] public string Title { get; set; }


        
        [Parameter] public RenderFragment BlogPost { get; set; }
    }
}