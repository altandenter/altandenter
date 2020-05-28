using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using AKSoftware.Localization.MultiLanguages;
using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components;

namespace AltAndEnter.Shared
{
    public class NavMenuBase : ComponentBase
    {
        [Inject] public ILocalStorageService LocalStorage { get; set; }
        [Inject] public ILanguageContainerService LanguageContainer { get; set; }
        [Inject] public NavigationManager NavigationManager { get; set; }

        public List<AltAndEnterLanguage> Languages = new List<AltAndEnterLanguage>();
        public string SelectedLanguage { get; set; }

        protected async Task ChangeLanguageAsync(string cultureCode)
        {
            SelectedLanguage = GetDisplayLanguageFromCultureCode(cultureCode);
            await LocalStorage.SetItemAsync("altandenter_culturecode", cultureCode);
            LanguageContainer.SetLanguage(CultureInfo.GetCultureInfo(cultureCode));
            NavigationManager.NavigateTo(NavigationManager.Uri, true);
        }

        protected override void OnInitialized()
        {
            LoadLanguages();
        }


        protected override async Task OnParametersSetAsync()
        {

            var cultureCode = await LocalStorage.GetItemAsync<string>("altandenter_culturecode") ?? "en-US";
            SelectedLanguage = string.IsNullOrWhiteSpace(cultureCode) ? "English" : GetDisplayLanguageFromCultureCode(cultureCode);
            LanguageContainer.SetLanguage(CultureInfo.GetCultureInfo(cultureCode));
        }
        private string GetDisplayLanguageFromCultureCode(string cultureCode)
        {
            return Languages.FirstOrDefault(l => l.CultureCode == cultureCode).Display;
        }

        private void LoadLanguages()
        {
            Languages.Add(new AltAndEnterLanguage { CultureCode = "en-US", Display = "English" });
            Languages.Add(new AltAndEnterLanguage { CultureCode = "es-ES", Display = "Español" });
            Languages.Add(new AltAndEnterLanguage { CultureCode = "fr-FR", Display = "Français" });
            Languages.Add(new AltAndEnterLanguage { CultureCode = "de-DE", Display = "Deutsch" });
            Languages.Add(new AltAndEnterLanguage { CultureCode = "nl-NL", Display = "Nederlands" });
        }

        protected bool collapseNavMenu = true;

        protected string NavMenuCssClass => collapseNavMenu ? "collapse" : null;

        protected void ToggleNavMenu()
        {
            collapseNavMenu = !collapseNavMenu;
        }
    }
}