#pragma checksum "C:\Users\Usuario\Documents\GitHub\CreditCardApplication\BackendAPI3.1\BackendAPI3.1\Views\CreditCards\Edit.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a58c76be52a095a325d66e7cf3528ce2441d0662"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_CreditCards_Edit), @"mvc.1.0.view", @"/Views/CreditCards/Edit.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a58c76be52a095a325d66e7cf3528ce2441d0662", @"/Views/CreditCards/Edit.cshtml")]
    public class Views_CreditCards_Edit : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Backend.Models.CreditCard>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Usuario\Documents\GitHub\CreditCardApplication\BackendAPI3.1\BackendAPI3.1\Views\CreditCards\Edit.cshtml"
  
    ViewData["Title"] = "Edit";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Edit</h1>

<h4>CreditCard</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Edit"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <input type=""hidden"" asp-for=""ID"" />
            <div class=""form-group"">
                <label asp-for=""Titular"" class=""control-label""></label>
                <input asp-for=""Titular"" class=""form-control"" />
                <span asp-validation-for=""Titular"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""NumeroTarjeta"" class=""control-label""></label>
                <input asp-for=""NumeroTarjeta"" class=""form-control"" />
                <span asp-validation-for=""NumeroTarjeta"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""FechaExpiracion"" class=""control-label""></label>
                <input asp-for=""FechaExpiracion"" class=""form-control"" />
");
            WriteLiteral(@"                <span asp-validation-for=""FechaExpiracion"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""CVV"" class=""control-label""></label>
                <input asp-for=""CVV"" class=""form-control"" />
                <span asp-validation-for=""CVV"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <input type=""submit"" value=""Save"" class=""btn btn-primary"" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action=""Index"">Back to List</a>
</div>

");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 48 "C:\Users\Usuario\Documents\GitHub\CreditCardApplication\BackendAPI3.1\BackendAPI3.1\Views\CreditCards\Edit.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Backend.Models.CreditCard> Html { get; private set; }
    }
}
#pragma warning restore 1591
