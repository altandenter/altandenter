using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace AltAndEnter.Pages.Blog.BlogPosts
{
    public class BlogPostTemplateBase : ComponentBase
    {
        [Inject] IJSRuntime JSRuntime { get; set; }
        [Parameter] public string Title { get; set; }
        [Parameter] public string UrlPart { get; set; }
        [Parameter] public string PageIdentifier { get; set; }
        [Parameter] public RenderFragment BlogPost { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await JSRuntime.InvokeVoidAsync("Prism.highlightAll");
        }
    }
}