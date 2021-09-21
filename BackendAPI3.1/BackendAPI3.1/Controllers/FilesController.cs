using Backend;
using BackendAPI3._1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace BackendAPI3._1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly string AppDirectory = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
        private readonly ApplicationDbContext _context;

        public FilesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost, DisableRequestSizeLimit]
        public IActionResult savePdf()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = AppDirectory;
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (file.Length > 0)
                {
                   if (!Directory.Exists(AppDirectory))
                        Directory.CreateDirectory(AppDirectory);

                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    var fileName2 = file.FileName;
                    var path = Path.Combine(AppDirectory, fileName2);
                    var fileExtension = Path.GetExtension(fileName2);
                    var newFileName = String.Concat(Convert.ToString(Guid.NewGuid()), fileExtension);
                    var objFiles = new Files()
                    {
                        DocumentId = 0,
                        Name = fileName2,
                        FilePath = path,
                        FileType = fileExtension,
                        CreatedOn=DateTime.Now
                    };
                    using (var target = new MemoryStream())
                    {
                        file.CopyTo(target);
                        objFiles.DataFiles = target.ToArray();
                    }
                    _context.Files.Add(objFiles);
                    _context.SaveChanges();

                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception e)
            {
                return StatusCode(500, $"Internal Server Error: {e}"); 
            }
        }

        [HttpGet]
        public List<Files> GetAllFiles()
        {
            return _context.Files.Select(n => new Files
            {
                DocumentId = n.DocumentId,
                Name = n.Name,
                FileType = n.FileType,
                FilePath = n.FilePath,
                CreatedOn = n.CreatedOn
            }).ToList();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> DownloadFile(int id)
        {
            if (!Directory.Exists(AppDirectory))
                Directory.CreateDirectory(AppDirectory);

            var file = _context.Files.Where(n => n.DocumentId == id).FirstOrDefault();

            var path = Path.Combine(AppDirectory, file?.FilePath);

            var memory = new MemoryStream();
            using (var stream = new FileStream(path, FileMode.Open))
            {
                await stream.CopyToAsync(memory);
            }
            memory.Position = 0;
            var contentType = "APPLICATION/octet-stream";
            var fileName = Path.GetFileName(path);

            return File(memory, contentType, fileName);
        }
    }
}
